auxiliry.ts
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
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 45,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 23,
          "end": 45,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 29,
              "end": 43,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 29,
                "end": 34,
                "decorators": [],
                "name": "field",
                "optional": false
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
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
              "value": null
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 22,
          "decorators": [],
          "name": "SomeClass",
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
test.ts
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
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 26,
        "end": 38,
        "raw": "'./auxiliry'",
        "value": "./auxiliry"
      },
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
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 18,
            "decorators": [],
            "name": "SomeClass",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 40,
      "end": 123,
      "async": false,
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
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 117,
                "end": 120,
                "body": []
              },
              "expression": false,
              "generator": false,
              "id": null,
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
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 49,
        "end": 59,
        "decorators": [],
        "name": "annotation",
        "optional": false
      },
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
            "optional": false
          }
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 124,
      "end": 199,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 131,
        "end": 199,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 144,
          "end": 199,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 150,
              "end": 197,
              "computed": false,
              "declare": false,
              "decorators": [
                {
                  "type": "Decorator",
                  "start": 150,
                  "end": 163,
                  "expression": {
                    "type": "CallExpression",
                    "start": 151,
                    "end": 163,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 151,
                      "end": 161,
                      "decorators": [],
                      "name": "annotation",
                      "optional": false
                    },
                    "optional": false
                  }
                }
              ],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 164,
                "end": 169,
                "decorators": [],
                "name": "array",
                "optional": false
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
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
                        "optional": false
                      }
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
              "value": null
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 137,
          "end": 143,
          "decorators": [],
          "name": "ClassA",
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
