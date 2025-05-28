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
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 22,
          "decorators": [],
          "name": "SomeClass",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 23,
          "end": 45,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 29,
              "end": 43,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 29,
                "end": 34,
                "decorators": [],
                "name": "field",
                "optional": false,
                "typeAnnotation": null
              },
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
              "value": null,
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null
            }
          ]
        },
        "abstract": false,
        "declare": false
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
            "decorators": [],
            "name": "SomeClass",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 18,
            "decorators": [],
            "name": "SomeClass",
            "optional": false,
            "typeAnnotation": null
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
      "phase": null,
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
        "decorators": [],
        "name": "annotation",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
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
            "decorators": [],
            "name": "PropertyDecorator",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
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
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 95,
                  "end": 106,
                  "decorators": [],
                  "name": "target",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 101,
                    "end": 106,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 103,
                      "end": 106
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 107,
                "end": 113,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 109,
                  "end": 113
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 117,
                "end": 120,
                "body": []
              },
              "id": null,
              "generator": false
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 124,
      "end": 199,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 131,
        "end": 199,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 137,
          "end": 143,
          "decorators": [],
          "name": "ClassA",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 144,
          "end": 199,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 150,
              "end": 197,
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
                      "decorators": [],
                      "name": "annotation",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false
                  }
                }
              ],
              "key": {
                "type": "Identifier",
                "start": 164,
                "end": 169,
                "decorators": [],
                "name": "array",
                "optional": false,
                "typeAnnotation": null
              },
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
                        "decorators": [],
                        "name": "SomeClass",
                        "optional": false,
                        "typeAnnotation": null
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
              "value": null,
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null
            }
          ]
        },
        "abstract": false,
        "declare": false
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
