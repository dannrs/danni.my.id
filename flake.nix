{
  description = "danni.my.id — dannrs";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixpkgs-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs =
    inputs:
    inputs.flake-utils.lib.eachDefaultSystem (
      system:
      let
        pkgs = import inputs.nixpkgs {
          inherit system;
        };
      in
      {
        devShells.default = pkgs.mkShell {
          packages = with pkgs; [
            nodejs_24
            pnpm
            wrangler
          ];

          shellHook = ''
            export PATH="$PWD/node_modules/.bin/:$PATH"
          '';
        };
      }
    );
}
