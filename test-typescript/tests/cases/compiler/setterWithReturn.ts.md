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
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 10,
        "name": "C234",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 147,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 17,
            "end": 145,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 28,
              "end": 30,
              "name": "p1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 30,
              "end": 145,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 31,
                  "end": 35,
                  "name": "arg1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
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
                            "name": "arg1",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "public"
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
