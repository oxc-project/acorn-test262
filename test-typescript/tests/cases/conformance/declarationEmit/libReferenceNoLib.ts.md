fakelib.ts
```json
{
  "type": "Program",
  "start": 65,
  "end": 243,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 65,
      "end": 85,
      "body": {
        "type": "TSInterfaceBody",
        "start": 82,
        "end": 85,
        "body": []
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 75,
        "end": 81,
        "decorators": [],
        "name": "Object",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 86,
      "end": 108,
      "body": {
        "type": "TSInterfaceBody",
        "start": 105,
        "end": 108,
        "body": []
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 96,
        "end": 101,
        "decorators": [],
        "name": "Array",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 101,
        "end": 104,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 102,
            "end": 103,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 102,
              "end": 103,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 109,
      "end": 129,
      "body": {
        "type": "TSInterfaceBody",
        "start": 126,
        "end": 129,
        "body": []
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 119,
        "end": 125,
        "decorators": [],
        "name": "String",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 130,
      "end": 151,
      "body": {
        "type": "TSInterfaceBody",
        "start": 148,
        "end": 151,
        "body": []
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 140,
        "end": 147,
        "decorators": [],
        "name": "Boolean",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 152,
      "end": 172,
      "body": {
        "type": "TSInterfaceBody",
        "start": 169,
        "end": 172,
        "body": []
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 162,
        "end": 168,
        "decorators": [],
        "name": "Number",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 173,
      "end": 195,
      "body": {
        "type": "TSInterfaceBody",
        "start": 192,
        "end": 195,
        "body": []
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 183,
        "end": 191,
        "decorators": [],
        "name": "Function",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 196,
      "end": 216,
      "body": {
        "type": "TSInterfaceBody",
        "start": 213,
        "end": 216,
        "body": []
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 206,
        "end": 212,
        "decorators": [],
        "name": "RegExp",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 217,
      "end": 241,
      "body": {
        "type": "TSInterfaceBody",
        "start": 238,
        "end": 241,
        "body": []
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 227,
        "end": 237,
        "decorators": [],
        "name": "IArguments",
        "optional": false
      }
    }
  ],
  "sourceType": "module"
}
```
file1.ts
```json
{
  "type": "Program",
  "start": 28,
  "end": 133,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 28,
      "end": 83,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 35,
        "end": 83,
        "body": {
          "type": "TSInterfaceBody",
          "start": 65,
          "end": 83,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 67,
              "end": 81,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 67,
                "end": 72,
                "decorators": [],
                "name": "field",
                "optional": false
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 72,
                "end": 80,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 74,
                  "end": 80
                }
              }
            }
          ]
        },
        "declare": true,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 53,
          "end": 64,
          "decorators": [],
          "name": "HTMLElement",
          "optional": false
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 84,
      "end": 132,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 91,
        "end": 132,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 97,
            "end": 131,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 97,
              "end": 114,
              "decorators": [],
              "name": "elem",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 101,
                "end": 114,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 103,
                  "end": 114,
                  "typeName": {
                    "type": "Identifier",
                    "start": 103,
                    "end": 114,
                    "decorators": [],
                    "name": "HTMLElement",
                    "optional": false
                  }
                }
              }
            },
            "init": {
              "type": "ObjectExpression",
              "start": 117,
              "end": 131,
              "properties": [
                {
                  "type": "Property",
                  "start": 119,
                  "end": 129,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 119,
                    "end": 124,
                    "decorators": [],
                    "name": "field",
                    "optional": false
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 126,
                    "end": 129,
                    "raw": "'a'",
                    "value": "a"
                  }
                }
              ]
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
