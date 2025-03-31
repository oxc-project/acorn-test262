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
      "id": {
        "type": "Identifier",
        "start": 32,
        "end": 35,
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
          "start": 36,
          "end": 71,
          "elements": [
            {
              "type": "Identifier",
              "start": 37,
              "end": 38,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            {
              "type": "Identifier",
              "start": 39,
              "end": 40,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            {
              "type": "Identifier",
              "start": 41,
              "end": 42,
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
      "body": {
        "type": "BlockStatement",
        "start": 73,
        "end": 76,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 77,
      "end": 147,
      "id": {
        "type": "Identifier",
        "start": 86,
        "end": 90,
        "name": "foo1",
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
          "start": 92,
          "end": 142,
          "properties": [
            {
              "type": "Property",
              "start": 94,
              "end": 95,
              "method": false,
              "shorthand": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 94,
                "end": 95,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Identifier",
                "start": 94,
                "end": 95,
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
              "start": 97,
              "end": 98,
              "method": false,
              "shorthand": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 97,
                "end": 98,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Identifier",
                "start": 97,
                "end": 98,
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
              "start": 100,
              "end": 101,
              "method": false,
              "shorthand": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 100,
                "end": 101,
                "name": "z",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Identifier",
                "start": 100,
                "end": 101,
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
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 108,
                    "end": 109,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 109,
                    "end": 117,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 111,
                      "end": 117
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
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
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 120,
                    "end": 128,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
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
                    "name": "z",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 131,
                    "end": 140,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 133,
                      "end": 140
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
      "body": {
        "type": "BlockStatement",
        "start": 144,
        "end": 147,
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
