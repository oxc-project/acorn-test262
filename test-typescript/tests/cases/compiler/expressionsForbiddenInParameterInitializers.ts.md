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
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 7,
        "end": 62,
        "async": true,
        "body": {
          "type": "BlockStatement",
          "start": 59,
          "end": 62,
          "body": []
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 22,
          "end": 25,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [
          {
            "type": "ObjectPattern",
            "start": 26,
            "end": 57,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 28,
                "end": 55,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 28,
                  "end": 31,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
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
                  "optional": false,
                  "right": {
                    "type": "AwaitExpression",
                    "start": 34,
                    "end": 55,
                    "argument": {
                      "type": "ImportExpression",
                      "start": 40,
                      "end": 55,
                      "options": null,
                      "source": {
                        "type": "Literal",
                        "start": 47,
                        "end": 54,
                        "raw": "\"./bar\"",
                        "value": "./bar"
                      }
                    }
                  },
                  "typeAnnotation": null
                }
              }
            ],
            "typeAnnotation": null
          }
        ],
        "returnType": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 64,
      "end": 110,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 71,
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
        "generator": true,
        "id": {
          "type": "Identifier",
          "start": 81,
          "end": 85,
          "decorators": [],
          "name": "foo2",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [
          {
            "type": "ObjectPattern",
            "start": 86,
            "end": 105,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 88,
                "end": 103,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 88,
                  "end": 91,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
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
                  "optional": false,
                  "right": {
                    "type": "YieldExpression",
                    "start": 94,
                    "end": 103,
                    "argument": {
                      "type": "Literal",
                      "start": 100,
                      "end": 103,
                      "raw": "\"a\"",
                      "value": "a"
                    },
                    "delegate": false
                  },
                  "typeAnnotation": null
                }
              }
            ],
            "typeAnnotation": null
          }
        ],
        "returnType": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
