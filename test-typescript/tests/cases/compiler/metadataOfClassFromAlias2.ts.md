__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 46,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 45,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 45,
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 22,
          "name": "SomeClass",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 23,
          "end": 45,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 29,
              "end": 43,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 29,
                "end": 34,
                "name": "field",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": null,
              "decorators": [],
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 34,
                "end": 42,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 36,
                  "end": 42
                }
              },
              "accessibility": null
            }
          ]
        },
        "decorators": [],
        "typeParameters": null,
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
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
  "end": 199,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 39,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 18,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 18,
            "name": "SomeClass",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 18,
            "name": "SomeClass",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 26,
        "end": 38,
        "value": "./auxiliry",
        "raw": "'./auxiliry'"
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "FunctionDeclaration",
      "start": 40,
      "end": 123,
      "id": {
        "type": "Identifier",
        "start": 49,
        "end": 59,
        "name": "annotation",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 81,
        "end": 123,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 87,
            "end": 121,
            "argument": {
              "type": "ArrowFunctionExpression",
              "start": 94,
              "end": 120,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 95,
                  "end": 106,
                  "name": "target",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 101,
                    "end": 106,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 103,
                      "end": 106
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 117,
                "end": 120,
                "body": []
              },
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 107,
                "end": 113,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 109,
                  "end": 113
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 61,
        "end": 80,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 63,
          "end": 80,
          "typeName": {
            "type": "Identifier",
            "start": 63,
            "end": 80,
            "name": "PropertyDecorator",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 124,
      "end": 199,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 131,
        "end": 199,
        "id": {
          "type": "Identifier",
          "start": 137,
          "end": 143,
          "name": "ClassA",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 144,
          "end": 199,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 150,
              "end": 197,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 164,
                "end": 169,
                "name": "array",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": null,
              "decorators": [
                {
                  "type": "Decorator",
                  "start": 150,
                  "end": 163,
                  "expression": {
                    "type": "CallExpression",
                    "start": 151,
                    "end": 163,
                    "callee": {
                      "type": "Identifier",
                      "start": 151,
                      "end": 161,
                      "name": "annotation",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [],
                    "optional": false,
                    "typeArguments": null
                  }
                }
              ],
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 169,
                "end": 196,
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "start": 171,
                  "end": 196,
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "start": 171,
                      "end": 180,
                      "typeName": {
                        "type": "Identifier",
                        "start": 171,
                        "end": 180,
                        "name": "SomeClass",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSNullKeyword",
                      "start": 183,
                      "end": 187
                    },
                    {
                      "type": "TSStringKeyword",
                      "start": 190,
                      "end": 196
                    }
                  ]
                }
              },
              "accessibility": null
            }
          ]
        },
        "decorators": [],
        "typeParameters": null,
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
