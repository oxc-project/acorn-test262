__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 234,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 31,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 22,
        "end": 30,
        "raw": "\"./test\"",
        "value": "./test"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 14,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 14,
            "decorators": [],
            "name": "Abcde",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 14,
            "decorators": [],
            "name": "Abcde",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "TSModuleDeclaration",
      "start": 33,
      "end": 92,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 57,
        "end": 92,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 61,
            "end": 90,
            "body": {
              "type": "TSInterfaceBody",
              "start": 77,
              "end": 90,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 79,
                  "end": 88,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 79,
                    "end": 80,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 80,
                    "end": 88,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 82,
                      "end": 88
                    }
                  }
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 71,
              "end": 76,
              "decorators": [],
              "name": "Abcde",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 48,
        "end": 56,
        "raw": "\"./test\"",
        "value": "./test"
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 94,
      "end": 108,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 94,
        "end": 107,
        "computed": false,
        "object": {
          "type": "NewExpression",
          "start": 94,
          "end": 105,
          "arguments": [],
          "callee": {
            "type": "Identifier",
            "start": 98,
            "end": 103,
            "decorators": [],
            "name": "Abcde",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 106,
          "end": 107,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 206,
      "end": 233,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 212,
          "end": 232,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 212,
            "end": 220,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 213,
              "end": 220,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 215,
                "end": 220,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 215,
                  "end": 220,
                  "decorators": [],
                  "name": "Abcde",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 223,
            "end": 232,
            "properties": [
              {
                "type": "Property",
                "start": 225,
                "end": 230,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 225,
                  "end": 226,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 228,
                  "end": 230,
                  "raw": "\"\"",
                  "value": ""
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
