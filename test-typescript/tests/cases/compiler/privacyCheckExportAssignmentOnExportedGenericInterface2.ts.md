__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 142,
  "body": [
    {
      "type": "TSExportAssignment",
      "start": 0,
      "end": 13,
      "expression": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 15,
      "end": 35,
      "body": {
        "type": "TSInterfaceBody",
        "start": 32,
        "end": 35,
        "body": []
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 28,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 28,
        "end": 31,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 29,
            "end": 30,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 29,
              "end": 30,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 37,
      "end": 98,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 73,
        "end": 98,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 79,
            "end": 96,
            "argument": {
              "type": "Identifier",
              "start": 86,
              "end": 95,
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 46,
        "end": 49,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 53,
          "end": 63,
          "decorators": [],
          "name": "array",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 58,
            "end": 63,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 60,
              "end": 63,
              "elementType": {
                "type": "TSTypeReference",
                "start": 60,
                "end": 61,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 60,
                  "end": 61,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 64,
        "end": 72,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 66,
          "end": 72,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 69,
            "end": 72,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 70,
                "end": 71,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 70,
                  "end": 71,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 66,
            "end": 69,
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 49,
        "end": 52,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 50,
            "end": 51,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 50,
              "end": 51,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 100,
      "end": 142,
      "body": {
        "type": "TSModuleBlock",
        "start": 111,
        "end": 142,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 117,
            "end": 140,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 124,
              "end": 140,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 128,
                  "end": 139,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 128,
                    "end": 129,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 132,
                    "end": 139,
                    "raw": "\"hello\"",
                    "value": "hello",
                    "regex": null,
                    "bigint": null
                  }
                }
              ],
              "declare": false,
              "kind": "var"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 107,
        "end": 110,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
