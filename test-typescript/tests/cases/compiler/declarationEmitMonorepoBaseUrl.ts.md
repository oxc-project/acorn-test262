/node_modules/.pnpm/@babel+parser@7.23.6/node_modules/@babel/parser/typings/babel-parser.d.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 91,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 53,
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 7,
        "end": 53,
        "async": false,
        "declare": true,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 24,
          "end": 36,
          "decorators": [],
          "name": "createPlugin",
          "optional": false
        },
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 38,
          "end": 52,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 40,
            "end": 52,
            "typeName": {
              "type": "Identifier",
              "start": 40,
              "end": 52,
              "decorators": [],
              "name": "PluginConfig",
              "optional": false
            }
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 54,
      "end": 90,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 61,
        "end": 90,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 88,
          "end": 90,
          "body": []
        },
        "declare": true,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 75,
          "end": 87,
          "decorators": [],
          "name": "PluginConfig",
          "optional": false
        },
        "implements": [],
        "superClass": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
/packages/compiler-core/src/index.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 46,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 45,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 29,
        "end": 44,
        "raw": "\"@babel/parser\"",
        "value": "@babel/parser"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 21,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 21,
            "decorators": [],
            "name": "PluginConfig",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 21,
            "decorators": [],
            "name": "PluginConfig",
            "optional": false
          }
        }
      ]
    }
  ],
  "sourceType": "module"
}
```
/packages/compiler-sfc/src/index.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 116,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 45,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 29,
        "end": 44,
        "raw": "\"@babel/parser\"",
        "value": "@babel/parser"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 21,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 21,
            "decorators": [],
            "name": "createPlugin",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 21,
            "decorators": [],
            "name": "createPlugin",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 46,
      "end": 115,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 53,
        "end": 115,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 85,
          "end": 115,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 89,
              "end": 113,
              "argument": {
                "type": "ArrayExpression",
                "start": 96,
                "end": 112,
                "elements": [
                  {
                    "type": "CallExpression",
                    "start": 97,
                    "end": 111,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 97,
                      "end": 109,
                      "decorators": [],
                      "name": "createPlugin",
                      "optional": false
                    },
                    "optional": false
                  }
                ]
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 62,
          "end": 82,
          "decorators": [],
          "name": "resolveParserPlugins",
          "optional": false
        },
        "params": []
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
