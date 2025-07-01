__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "Literal",
        "value": "./foo",
        "raw": "\"./foo\"",
        "start": 15,
        "end": 22
      },
      "exportKind": "value",
      "start": 0,
      "end": 23
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 24
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 15,
        "end": 18
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "AwaitExpression",
              "argument": {
                "type": "ImportExpression",
                "source": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "AwaitExpression",
                    "argument": {
                      "type": "ImportExpression",
                      "source": {
                        "type": "Literal",
                        "value": "./foo",
                        "raw": "\"./foo\"",
                        "start": 61,
                        "end": 68
                      },
                      "options": null,
                      "phase": null,
                      "start": 54,
                      "end": 69
                    },
                    "start": 48,
                    "end": 69
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "default",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 71,
                    "end": 78
                  },
                  "optional": false,
                  "computed": false,
                  "start": 47,
                  "end": 78
                },
                "options": null,
                "phase": null,
                "start": 40,
                "end": 79
              },
              "start": 34,
              "end": 79
            },
            "start": 27,
            "end": 80
          }
        ],
        "start": 21,
        "end": 82
      },
      "expression": false,
      "start": 0,
      "end": 82
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 82
}
```
