__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 128,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 32,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 13,
          "end": 30,
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 16,
            "end": 30,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 17,
              "end": 30,
              "elementType": {
                "type": "TSTypeLiteral",
                "start": 17,
                "end": 28,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 18,
                    "end": 27,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 18,
                      "end": 19,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 19,
                      "end": 26,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 20,
                        "end": 26
                      }
                    }
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 33,
      "end": 75,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 42,
        "end": 45,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 46,
          "end": 73,
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 49,
            "end": 73,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 50,
              "end": 73,
              "elementType": {
                "type": "TSTypeLiteral",
                "start": 50,
                "end": 71,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 51,
                    "end": 60,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 51,
                      "end": 52,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 52,
                      "end": 59,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 53,
                        "end": 59
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 61,
                    "end": 70,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 61,
                      "end": 62,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 62,
                      "end": 69,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 63,
                        "end": 69
                      }
                    }
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 76,
      "end": 128,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 116,
        "end": 128,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 118,
            "end": 126,
            "argument": {
              "type": "Literal",
              "start": 125,
              "end": 126,
              "raw": "0",
              "value": 0,
              "regex": null,
              "bigint": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 85,
        "end": 88,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 89,
          "end": 114,
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 92,
            "end": 114,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 93,
              "end": 114,
              "elementType": {
                "type": "TSTypeLiteral",
                "start": 93,
                "end": 112,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 94,
                    "end": 100,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 94,
                      "end": 95,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 95,
                      "end": 99,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 96,
                        "end": 99
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 101,
                    "end": 111,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 101,
                      "end": 102,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": true,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 103,
                      "end": 110,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 104,
                        "end": 110
                      }
                    }
                  }
                ]
              }
            }
          }
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
