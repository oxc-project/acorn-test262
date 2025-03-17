__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 107,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 30,
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
          "end": 28,
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 16,
            "end": 28,
            "typeAnnotation": {
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
                    "name": "b",
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
                      "type": "TSStringKeyword",
                      "start": 20,
                      "end": 26
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
      "type": "TSDeclareFunction",
      "start": 31,
      "end": 61,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 40,
        "end": 43,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 44,
          "end": 59,
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 47,
            "end": 59,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 48,
              "end": 59,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 49,
                  "end": 58,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 49,
                    "end": 50,
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
                    "start": 50,
                    "end": 57,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 51,
                      "end": 57
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
      "start": 62,
      "end": 106,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 89,
        "end": 106,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 91,
            "end": 104,
            "argument": {
              "type": "ObjectExpression",
              "start": 98,
              "end": 104,
              "properties": [
                {
                  "type": "Property",
                  "start": 99,
                  "end": 103,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 99,
                    "end": 100,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 101,
                    "end": 103,
                    "raw": "\"\"",
                    "value": ""
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 71,
        "end": 74,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 75,
          "end": 87,
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 78,
            "end": 87,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 79,
              "end": 87,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 80,
                  "end": 86,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 80,
                    "end": 81,
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
                    "start": 81,
                    "end": 85,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 82,
                      "end": 85
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
