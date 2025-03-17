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
      "id": {
        "type": "Identifier",
        "start": 33,
        "end": 36,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "ArrayPattern",
          "start": 37,
          "end": 75,
          "elements": [
            {
              "type": "Identifier",
              "start": 38,
              "end": 39,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            {
              "type": "Identifier",
              "start": 41,
              "end": 42,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            {
              "type": "Identifier",
              "start": 44,
              "end": 45,
              "name": "z",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          ],
          "decorators": [],
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
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 78,
      "end": 110,
      "id": {
        "type": "Identifier",
        "start": 87,
        "end": 90,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "RestElement",
          "start": 91,
          "end": 105,
          "argument": {
            "type": "Identifier",
            "start": 94,
            "end": 98,
            "name": "rest",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
      "body": {
        "type": "BlockStatement",
        "start": 107,
        "end": 110,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 112,
      "end": 179,
      "id": {
        "type": "Identifier",
        "start": 121,
        "end": 125,
        "name": "foo2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "ObjectPattern",
          "start": 127,
          "end": 177,
          "properties": [
            {
              "type": "Property",
              "start": 129,
              "end": 130,
              "method": false,
              "shorthand": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 129,
                "end": 130,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Identifier",
                "start": 129,
                "end": 130,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "init",
              "optional": false
            },
            {
              "type": "Property",
              "start": 132,
              "end": 133,
              "method": false,
              "shorthand": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 132,
                "end": 133,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Identifier",
                "start": 132,
                "end": 133,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "init",
              "optional": false
            },
            {
              "type": "Property",
              "start": 135,
              "end": 136,
              "method": false,
              "shorthand": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 135,
                "end": 136,
                "name": "z",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Identifier",
                "start": 135,
                "end": 136,
                "name": "z",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "init",
              "optional": false
            }
          ],
          "decorators": [],
          "optional": true,
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
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 143,
                    "end": 144,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 144,
                    "end": 152,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 146,
                      "end": 152
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 154,
                  "end": 164,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 154,
                    "end": 155,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 155,
                    "end": 163,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 157,
                      "end": 163
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 165,
                  "end": 175,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 165,
                    "end": 166,
                    "name": "z",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 166,
                    "end": 175,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 168,
                      "end": 175
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          }
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 180,
      "end": 214,
      "id": {
        "type": "Identifier",
        "start": 189,
        "end": 193,
        "name": "foo2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "RestElement",
          "start": 194,
          "end": 208,
          "argument": {
            "type": "Identifier",
            "start": 197,
            "end": 201,
            "name": "rest",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
      "body": {
        "type": "BlockStatement",
        "start": 210,
        "end": 214,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
