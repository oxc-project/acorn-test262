__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "thing",
              "optional": false,
              "typeAnnotation": null,
              "start": 13,
              "end": 18
            },
            "init": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "doit",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 27,
                    "end": 31
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
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
                            "type": "ObjectExpression",
                            "properties": [
                              {
                                "type": "Property",
                                "kind": "init",
                                "key": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 66,
                                    "end": 70
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "a",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 71,
                                    "end": 72
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 66,
                                  "end": 72
                                },
                                "value": {
                                  "type": "Literal",
                                  "value": "",
                                  "raw": "\"\"",
                                  "start": 75,
                                  "end": 77
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": true,
                                "optional": false,
                                "start": 65,
                                "end": 77
                              }
                            ],
                            "start": 51,
                            "end": 166
                          },
                          "start": 44,
                          "end": 166
                        }
                      ],
                      "start": 34,
                      "end": 172
                    },
                    "expression": false,
                    "start": 31,
                    "end": 172
                  },
                  "method": true,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 27,
                  "end": 172
                }
              ],
              "start": 21,
              "end": 174
            },
            "definite": false,
            "start": 13,
            "end": 174
          }
        ],
        "declare": false,
        "start": 7,
        "end": 174
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 174
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 174
}
```
