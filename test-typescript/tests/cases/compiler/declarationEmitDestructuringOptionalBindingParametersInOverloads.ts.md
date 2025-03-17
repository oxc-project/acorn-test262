__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 24,
  "end": 214,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 24,
      "end": 77,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 33,
        "end": 36,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "ArrayPattern",
          "start": 37,
          "end": 75,
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "start": 38,
              "end": 39,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "Identifier",
              "start": 41,
              "end": 42,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "Identifier",
              "start": 44,
              "end": 45,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 48,
            "end": 75,
            "typeAnnotation": {
              "type": "TSTupleType",
              "start": 50,
              "end": 75,
              "elementTypes": [
                {
                  "type": "TSStringKeyword",
                  "start": 51,
                  "end": 57
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 59,
                  "end": 65
                },
                {
                  "type": "TSBooleanKeyword",
                  "start": 67,
                  "end": 74
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 78,
      "end": 110,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 107,
        "end": 110,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 87,
        "end": 90,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "RestElement",
          "start": 91,
          "end": 105,
          "argument": {
            "type": "Identifier",
            "start": 94,
            "end": 98,
            "decorators": [],
            "name": "rest",
            "optional": false,
            "typeAnnotation": null
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 98,
            "end": 105,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 100,
              "end": 105,
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 100,
                "end": 103
              }
            }
          },
          "value": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 112,
      "end": 179,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 121,
        "end": 125,
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "ObjectPattern",
          "start": 127,
          "end": 177,
          "decorators": [],
          "optional": true,
          "properties": [
            {
              "type": "Property",
              "start": 129,
              "end": 130,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 129,
                "end": 130,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "Identifier",
                "start": 129,
                "end": 130,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "Property",
              "start": 132,
              "end": 133,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 132,
                "end": 133,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "Identifier",
                "start": 132,
                "end": 133,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "Property",
              "start": 135,
              "end": 136,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 135,
                "end": 136,
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "Identifier",
                "start": 135,
                "end": 136,
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ],
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 139,
            "end": 177,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 141,
              "end": 177,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 143,
                  "end": 153,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 143,
                    "end": 144,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 144,
                    "end": 152,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 146,
                      "end": 152
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 154,
                  "end": 164,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 154,
                    "end": 155,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 155,
                    "end": 163,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 157,
                      "end": 163
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 165,
                  "end": 175,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 165,
                    "end": 166,
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 166,
                    "end": 175,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 168,
                      "end": 175
                    }
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 180,
      "end": 214,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 210,
        "end": 214,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 189,
        "end": 193,
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "RestElement",
          "start": 194,
          "end": 208,
          "argument": {
            "type": "Identifier",
            "start": 197,
            "end": 201,
            "decorators": [],
            "name": "rest",
            "optional": false,
            "typeAnnotation": null
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 201,
            "end": 208,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 203,
              "end": 208,
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 203,
                "end": 206
              }
            }
          },
          "value": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
