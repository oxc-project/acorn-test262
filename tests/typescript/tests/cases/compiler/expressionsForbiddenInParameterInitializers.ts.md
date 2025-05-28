__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 110,
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
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": true,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "ObjectPattern",
            "start": 26,
            "end": 57,
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "start": 28,
                "end": 55,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 28,
                  "end": 31,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "AssignmentPattern",
                  "start": 28,
                  "end": 55,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 28,
                    "end": 31,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
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
                      "options": null,
                      "phase": null
                    }
                  },
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false
              }
            ],
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "start": 59,
          "end": 62,
          "body": []
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
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
          "decorators": [],
          "name": "foo2",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": true,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "ObjectPattern",
            "start": 86,
            "end": 105,
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "start": 88,
                "end": 103,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 88,
                  "end": 91,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "AssignmentPattern",
                  "start": 88,
                  "end": 103,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 88,
                    "end": 91,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
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
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false
              }
            ],
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "start": 107,
          "end": 110,
          "body": []
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
