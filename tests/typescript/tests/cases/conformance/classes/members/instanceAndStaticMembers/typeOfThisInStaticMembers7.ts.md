__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 173,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 56,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 56,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 27,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 22,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 25,
              "end": 26,
              "raw": "1",
              "value": 1
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 32,
            "end": 54,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 39,
              "end": 40,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": null,
            "value": {
              "type": "BinaryExpression",
              "start": 43,
              "end": 53,
              "operator": "+",
              "left": {
                "type": "MemberExpression",
                "start": 43,
                "end": 49,
                "computed": false,
                "object": {
                  "type": "ThisExpression",
                  "start": 43,
                  "end": 47
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 48,
                  "end": 49,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "Literal",
                "start": 52,
                "end": 53,
                "raw": "1",
                "value": 1
              }
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 58,
      "end": 173,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 76,
        "end": 173,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 82,
            "end": 95,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 89,
              "end": 90,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 93,
              "end": 94,
              "raw": "2",
              "value": 2
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 100,
            "end": 122,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 107,
              "end": 108,
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": null,
            "value": {
              "type": "BinaryExpression",
              "start": 111,
              "end": 121,
              "operator": "+",
              "left": {
                "type": "MemberExpression",
                "start": 111,
                "end": 117,
                "computed": false,
                "object": {
                  "type": "ThisExpression",
                  "start": 111,
                  "end": 115
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 116,
                  "end": 117,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "Literal",
                "start": 120,
                "end": 121,
                "raw": "1",
                "value": 1
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 127,
            "end": 171,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 134,
              "end": 135,
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": null,
            "value": {
              "type": "BinaryExpression",
              "start": 138,
              "end": 170,
              "operator": "+",
              "left": {
                "type": "BinaryExpression",
                "start": 138,
                "end": 166,
                "operator": "+",
                "left": {
                  "type": "BinaryExpression",
                  "start": 138,
                  "end": 151,
                  "operator": "+",
                  "left": {
                    "type": "Literal",
                    "start": 138,
                    "end": 139,
                    "raw": "1",
                    "value": 1
                  },
                  "right": {
                    "type": "MemberExpression",
                    "start": 143,
                    "end": 150,
                    "computed": false,
                    "object": {
                      "type": "Super",
                      "start": 143,
                      "end": 148
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 149,
                      "end": 150,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "right": {
                  "type": "BinaryExpression",
                  "start": 155,
                  "end": 165,
                  "operator": "+",
                  "left": {
                    "type": "MemberExpression",
                    "start": 155,
                    "end": 161,
                    "computed": false,
                    "object": {
                      "type": "ThisExpression",
                      "start": 155,
                      "end": 159
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 160,
                      "end": 161,
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "start": 164,
                    "end": 165,
                    "raw": "1",
                    "value": 1
                  }
                }
              },
              "right": {
                "type": "Literal",
                "start": 169,
                "end": 170,
                "raw": "1",
                "value": 1
              }
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 64,
        "end": 65,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 74,
        "end": 75,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
