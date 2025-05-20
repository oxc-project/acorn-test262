__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 134,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 18,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 6,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 9,
        "end": 17,
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 11,
            "end": 17
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 19,
      "end": 68,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 24,
        "end": 25,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 30,
        "end": 67,
        "types": [
          {
            "type": "TSTypeLiteral",
            "start": 32,
            "end": 47,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 34,
                "end": 45,
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 34,
                  "end": 37,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 37,
                  "end": 45,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 39,
                    "end": 45
                  }
                }
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 52,
            "end": 67,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 54,
                "end": 65,
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 54,
                  "end": 57,
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 57,
                  "end": 65,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 59,
                    "end": 65
                  }
                }
              }
            ]
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 70,
      "end": 134,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 75,
        "end": 76,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTupleType",
        "start": 79,
        "end": 133,
        "elementTypes": [
          {
            "type": "TSIntersectionType",
            "start": 80,
            "end": 105,
            "types": [
              {
                "type": "TSTypeLiteral",
                "start": 82,
                "end": 92,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 84,
                    "end": 90,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 84,
                      "end": 87,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 87,
                      "end": 90,
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "start": 89,
                        "end": 90,
                        "literal": {
                          "type": "Literal",
                          "start": 89,
                          "end": 90,
                          "raw": "1",
                          "value": 1
                        }
                      }
                    }
                  }
                ]
              },
              {
                "type": "TSTypeLiteral",
                "start": 95,
                "end": 105,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 97,
                    "end": 103,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 97,
                      "end": 100,
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 100,
                      "end": 103,
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "start": 102,
                        "end": 103,
                        "literal": {
                          "type": "Literal",
                          "start": 102,
                          "end": 103,
                          "raw": "2",
                          "value": 2
                        }
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "TSIntersectionType",
            "start": 107,
            "end": 132,
            "types": [
              {
                "type": "TSTypeLiteral",
                "start": 109,
                "end": 119,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 111,
                    "end": 117,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 111,
                      "end": 114,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 114,
                      "end": 117,
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "start": 116,
                        "end": 117,
                        "literal": {
                          "type": "Literal",
                          "start": 116,
                          "end": 117,
                          "raw": "3",
                          "value": 3
                        }
                      }
                    }
                  }
                ]
              },
              {
                "type": "TSTypeLiteral",
                "start": 122,
                "end": 132,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 124,
                    "end": 130,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 124,
                      "end": 127,
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 127,
                      "end": 130,
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "start": 129,
                        "end": 130,
                        "literal": {
                          "type": "Literal",
                          "start": 129,
                          "end": 130,
                          "raw": "4",
                          "value": 4
                        }
                      }
                    }
                  }
                ]
              }
            ]
          }
        ]
      },
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
