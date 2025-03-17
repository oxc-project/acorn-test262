__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 23,
  "end": 147,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 23,
      "end": 76,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 73,
        "end": 76,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 32,
        "end": 35,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "ArrayPattern",
          "start": 36,
          "end": 71,
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "start": 37,
              "end": 38,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "Identifier",
              "start": 39,
              "end": 40,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "Identifier",
              "start": 41,
              "end": 42,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 44,
            "end": 71,
            "typeAnnotation": {
              "type": "TSTupleType",
              "start": 46,
              "end": 71,
              "elementTypes": [
                {
                  "type": "TSStringKeyword",
                  "start": 47,
                  "end": 53
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 55,
                  "end": 61
                },
                {
                  "type": "TSBooleanKeyword",
                  "start": 63,
                  "end": 70
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
      "start": 77,
      "end": 147,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 144,
        "end": 147,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 86,
        "end": 90,
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "ObjectPattern",
          "start": 92,
          "end": 142,
          "decorators": [],
          "optional": true,
          "properties": [
            {
              "type": "Property",
              "start": 94,
              "end": 95,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 94,
                "end": 95,
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
                "start": 94,
                "end": 95,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "Property",
              "start": 97,
              "end": 98,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 97,
                "end": 98,
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
                "start": 97,
                "end": 98,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "Property",
              "start": 100,
              "end": 101,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 100,
                "end": 101,
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
                "start": 100,
                "end": 101,
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ],
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 104,
            "end": 142,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 106,
              "end": 142,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 108,
                  "end": 118,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 108,
                    "end": 109,
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
                    "start": 109,
                    "end": 117,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 111,
                      "end": 117
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 119,
                  "end": 129,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 119,
                    "end": 120,
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
                    "start": 120,
                    "end": 128,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 122,
                      "end": 128
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 130,
                  "end": 140,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 130,
                    "end": 131,
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
                    "start": 131,
                    "end": 140,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 133,
                      "end": 140
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
