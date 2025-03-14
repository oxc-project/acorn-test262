/node_modules/a/node_modules/@foo/bar/index.d.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 42,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 41,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 41,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 15,
          "end": 41,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 21,
              "end": 39,
              "accessibility": "private",
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 29,
                "end": 30,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 30,
                "end": 38,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 32,
                  "end": 38
                }
              },
              "value": null
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 14,
          "decorators": [],
          "name": "C",
          "optional": false
        },
        "implements": [],
        "superClass": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
/node_modules/a/index.d.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 49,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 29,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 18,
        "end": 28,
        "raw": "\"@foo/bar\"",
        "value": "@foo/bar"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 10,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "decorators": [],
            "name": "C",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "decorators": [],
            "name": "C",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 30,
      "end": 48,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 37,
        "end": 48,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 43,
            "end": 47,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 43,
              "end": 47,
              "decorators": [],
              "name": "o",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 44,
                "end": 47,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 46,
                  "end": 47,
                  "typeName": {
                    "type": "Identifier",
                    "start": 46,
                    "end": 47,
                    "decorators": [],
                    "name": "C",
                    "optional": false
                  }
                }
              }
            },
            "init": null
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
/node_modules/@foo/bar/use.d.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 62,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 28,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 18,
        "end": 27,
        "raw": "\"./index\"",
        "value": "./index"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 10,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "decorators": [],
            "name": "C",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "decorators": [],
            "name": "C",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 29,
      "end": 61,
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 36,
        "end": 61,
        "async": false,
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 45,
          "end": 48,
          "decorators": [],
          "name": "use",
          "optional": false
        },
        "params": [
          {
            "type": "Identifier",
            "start": 49,
            "end": 53,
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 50,
              "end": 53,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 52,
                "end": 53,
                "typeName": {
                  "type": "Identifier",
                  "start": 52,
                  "end": 53,
                  "decorators": [],
                  "name": "C",
                  "optional": false
                }
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 54,
          "end": 60,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 56,
            "end": 60
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
/node_modules/@foo/bar/index.d.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 42,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 41,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 41,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 15,
          "end": 41,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 21,
              "end": 39,
              "accessibility": "private",
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 29,
                "end": 30,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 30,
                "end": 38,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 32,
                  "end": 38
                }
              },
              "value": null
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 14,
          "decorators": [],
          "name": "C",
          "optional": false
        },
        "implements": [],
        "superClass": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
/index.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 68,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 35,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 20,
        "end": 34,
        "raw": "\"@foo/bar/use\"",
        "value": "@foo/bar/use"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 12,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 12,
            "decorators": [],
            "name": "use",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 12,
            "decorators": [],
            "name": "use",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 36,
      "end": 58,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 54,
        "end": 57,
        "raw": "\"a\"",
        "value": "a"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 45,
          "end": 46,
          "imported": {
            "type": "Identifier",
            "start": 45,
            "end": 46,
            "decorators": [],
            "name": "o",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 45,
            "end": 46,
            "decorators": [],
            "name": "o",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 60,
      "end": 67,
      "expression": {
        "type": "CallExpression",
        "start": 60,
        "end": 66,
        "arguments": [
          {
            "type": "Identifier",
            "start": 64,
            "end": 65,
            "decorators": [],
            "name": "o",
            "optional": false
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 60,
          "end": 63,
          "decorators": [],
          "name": "use",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "module"
}
```
