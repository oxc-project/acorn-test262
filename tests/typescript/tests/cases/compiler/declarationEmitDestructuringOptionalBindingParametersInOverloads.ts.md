__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 190,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 53,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ArrayPattern",
          "start": 13,
          "end": 51,
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "start": 14,
              "end": 15,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "Identifier",
              "start": 17,
              "end": 18,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "Identifier",
              "start": 20,
              "end": 21,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 24,
            "end": 51,
            "typeAnnotation": {
              "type": "TSTupleType",
              "start": 26,
              "end": 51,
              "elementTypes": [
                {
                  "type": "TSStringKeyword",
                  "start": 27,
                  "end": 33
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 35,
                  "end": 41
                },
                {
                  "type": "TSBooleanKeyword",
                  "start": 43,
                  "end": 50
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 54,
      "end": 86,
      "id": {
        "type": "Identifier",
        "start": 63,
        "end": 66,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "RestElement",
          "start": 67,
          "end": 81,
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "start": 70,
            "end": 74,
            "decorators": [],
            "name": "rest",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 74,
            "end": 81,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 76,
              "end": 81,
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 76,
                "end": 79
              }
            }
          },
          "value": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 83,
        "end": 86,
        "body": []
      },
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 88,
      "end": 155,
      "id": {
        "type": "Identifier",
        "start": 97,
        "end": 101,
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "start": 103,
          "end": 153,
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "start": 105,
              "end": 106,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 105,
                "end": 106,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Identifier",
                "start": 105,
                "end": 106,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false
            },
            {
              "type": "Property",
              "start": 108,
              "end": 109,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 108,
                "end": 109,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Identifier",
                "start": 108,
                "end": 109,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false
            },
            {
              "type": "Property",
              "start": 111,
              "end": 112,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 111,
                "end": 112,
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Identifier",
                "start": 111,
                "end": 112,
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false
            }
          ],
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 115,
            "end": 153,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 117,
              "end": 153,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 119,
                  "end": 129,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 119,
                    "end": 120,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 120,
                    "end": 128,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 122,
                      "end": 128
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 130,
                  "end": 140,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 130,
                    "end": 131,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 131,
                    "end": 139,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 133,
                      "end": 139
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 141,
                  "end": 151,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 141,
                    "end": 142,
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 142,
                    "end": 151,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 144,
                      "end": 151
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
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 156,
      "end": 190,
      "id": {
        "type": "Identifier",
        "start": 165,
        "end": 169,
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "RestElement",
          "start": 170,
          "end": 184,
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "start": 173,
            "end": 177,
            "decorators": [],
            "name": "rest",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 177,
            "end": 184,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 179,
              "end": 184,
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 179,
                "end": 182
              }
            }
          },
          "value": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 186,
        "end": 190,
        "body": []
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
