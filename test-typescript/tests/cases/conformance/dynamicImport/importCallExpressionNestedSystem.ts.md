__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 24,
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "start": 0,
      "end": 23,
      "declaration": {
        "type": "Literal",
        "start": 15,
        "end": 22,
        "value": "./foo",
        "raw": "\"./foo\""
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 82,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 82,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 18,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 21,
        "end": 82,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 27,
            "end": 80,
            "argument": {
              "type": "AwaitExpression",
              "start": 34,
              "end": 79,
              "argument": {
                "type": "ImportExpression",
                "start": 40,
                "end": 79,
                "source": {
                  "type": "MemberExpression",
                  "start": 47,
                  "end": 78,
                  "object": {
                    "type": "AwaitExpression",
                    "start": 48,
                    "end": 69,
                    "argument": {
                      "type": "ImportExpression",
                      "start": 54,
                      "end": 69,
                      "source": {
                        "type": "Literal",
                        "start": 61,
                        "end": 68,
                        "value": "./foo",
                        "raw": "\"./foo\""
                      },
                      "options": null
                    }
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 71,
                    "end": 78,
                    "name": "default",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "options": null
              }
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
