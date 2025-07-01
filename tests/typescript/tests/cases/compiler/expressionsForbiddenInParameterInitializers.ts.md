__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 22,
          "end": 25
        },
        "generator": false,
        "async": true,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 28,
                  "end": 31
                },
                "value": {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 28,
                    "end": 31
                  },
                  "right": {
                    "type": "AwaitExpression",
                    "argument": {
                      "type": "ImportExpression",
                      "source": {
                        "type": "Literal",
                        "value": "./bar",
                        "raw": "\"./bar\"",
                        "start": 47,
                        "end": 54
                      },
                      "options": null,
                      "phase": null,
                      "start": 40,
                      "end": 55
                    },
                    "start": 34,
                    "end": 55
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 28,
                  "end": 55
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 28,
                "end": 55
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 26,
            "end": 57
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 59,
          "end": 62
        },
        "expression": false,
        "start": 7,
        "end": 62
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 62
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo2",
          "optional": false,
          "typeAnnotation": null,
          "start": 81,
          "end": 85
        },
        "generator": true,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 88,
                  "end": 91
                },
                "value": {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 88,
                    "end": 91
                  },
                  "right": {
                    "type": "YieldExpression",
                    "delegate": false,
                    "argument": {
                      "type": "Literal",
                      "value": "a",
                      "raw": "\"a\"",
                      "start": 100,
                      "end": 103
                    },
                    "start": 94,
                    "end": 103
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 88,
                  "end": 103
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 88,
                "end": 103
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 86,
            "end": 105
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 107,
          "end": 110
        },
        "expression": false,
        "start": 71,
        "end": 110
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 64,
      "end": 110
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 110
}
```
