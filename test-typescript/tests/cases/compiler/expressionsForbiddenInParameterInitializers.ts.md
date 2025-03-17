__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 111,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 62,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 7,
        "end": 62,
        "id": {
          "type": "Identifier",
          "start": 22,
          "end": 25,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": true,
        "params": [
          {
            "type": "ObjectPattern",
            "start": 26,
            "end": 57,
            "properties": [
              {
                "type": "Property",
                "start": 28,
                "end": 55,
                "method": false,
                "shorthand": true,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 28,
                  "end": 31,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "AssignmentPattern",
                  "start": 28,
                  "end": 55,
                  "left": {
                    "type": "Identifier",
                    "start": 28,
                    "end": 31,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "AwaitExpression",
                    "start": 34,
                    "end": 55,
                    "argument": {
                      "type": "ImportExpression",
                      "start": 40,
                      "end": 55,
                      "source": {
                        "type": "Literal",
                        "start": 47,
                        "end": 54,
                        "value": "./bar",
                        "raw": "\"./bar\""
                      },
                      "options": null
                    }
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "optional": false
              }
            ],
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "body": {
          "type": "BlockStatement",
          "start": 59,
          "end": 62,
          "body": []
        },
        "declare": false,
        "typeParameters": null,
        "returnType": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 64,
      "end": 110,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 71,
        "end": 110,
        "id": {
          "type": "Identifier",
          "start": 81,
          "end": 85,
          "name": "foo2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": true,
        "async": false,
        "params": [
          {
            "type": "ObjectPattern",
            "start": 86,
            "end": 105,
            "properties": [
              {
                "type": "Property",
                "start": 88,
                "end": 103,
                "method": false,
                "shorthand": true,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 88,
                  "end": 91,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "AssignmentPattern",
                  "start": 88,
                  "end": 103,
                  "left": {
                    "type": "Identifier",
                    "start": 88,
                    "end": 91,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "YieldExpression",
                    "start": 94,
                    "end": 103,
                    "delegate": false,
                    "argument": {
                      "type": "Literal",
                      "start": 100,
                      "end": 103,
                      "value": "a",
                      "raw": "\"a\""
                    }
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "optional": false
              }
            ],
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
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
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
