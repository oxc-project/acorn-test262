__ESTREE_TEST__:PASS:
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
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 7,
        "end": 53,
        "id": {
          "type": "Identifier",
          "start": 24,
          "end": 36,
          "decorators": [],
          "name": "createPlugin",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": true,
        "typeParameters": null,
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
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
        "body": null,
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 54,
      "end": 90,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 61,
        "end": 90,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 75,
          "end": 87,
          "decorators": [],
          "name": "PluginConfig",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 88,
          "end": 90,
          "body": []
        },
        "abstract": false,
        "declare": true
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
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
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 21,
            "decorators": [],
            "name": "PluginConfig",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 29,
        "end": 44,
        "value": "@babel/parser",
        "raw": "\"@babel/parser\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
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
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 21,
            "decorators": [],
            "name": "createPlugin",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 29,
        "end": 44,
        "value": "@babel/parser",
        "raw": "\"@babel/parser\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 46,
      "end": 115,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 53,
        "end": 115,
        "id": {
          "type": "Identifier",
          "start": 62,
          "end": 82,
          "decorators": [],
          "name": "resolveParserPlugins",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
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
                    "callee": {
                      "type": "Identifier",
                      "start": 97,
                      "end": 109,
                      "decorators": [],
                      "name": "createPlugin",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false
                  }
                ]
              }
            }
          ]
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
