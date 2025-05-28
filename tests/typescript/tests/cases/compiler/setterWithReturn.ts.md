__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 147,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 147,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 10,
        "decorators": [],
        "name": "C234",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 147,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 17,
            "end": 145,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 28,
              "end": 30,
              "decorators": [],
              "name": "p1",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 30,
              "end": 145,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 31,
                  "end": 35,
                  "decorators": [],
                  "name": "arg1",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 37,
                "end": 145,
                "body": [
                  {
                    "type": "IfStatement",
                    "start": 47,
                    "end": 140,
                    "test": {
                      "type": "Literal",
                      "start": 51,
                      "end": 55,
                      "value": true,
                      "raw": "true"
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 57,
                      "end": 93,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 71,
                          "end": 83,
                          "argument": {
                            "type": "Identifier",
                            "start": 78,
                            "end": 82,
                            "decorators": [],
                            "name": "arg1",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "alternate": {
                      "type": "BlockStatement",
                      "start": 107,
                      "end": 140,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 121,
                          "end": 130,
                          "argument": {
                            "type": "Literal",
                            "start": 128,
                            "end": 129,
                            "value": 0,
                            "raw": "0"
                          }
                        }
                      ]
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public"
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
