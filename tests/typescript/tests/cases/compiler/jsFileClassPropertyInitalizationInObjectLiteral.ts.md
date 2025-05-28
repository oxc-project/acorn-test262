__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 78,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 78,
      "expression": {
        "type": "AssignmentExpression",
        "start": 0,
        "end": 77,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 0,
          "end": 14,
          "object": {
            "type": "Identifier",
            "start": 0,
            "end": 6,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 7,
            "end": 14,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "FunctionExpression",
          "start": 17,
          "end": 77,
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "start": 29,
            "end": 77,
            "body": [
              {
                "type": "ClassDeclaration",
                "start": 33,
                "end": 44,
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "start": 39,
                  "end": 40,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "start": 41,
                  "end": 44,
                  "body": []
                },
                "abstract": false,
                "declare": false
              },
              {
                "type": "ReturnStatement",
                "start": 47,
                "end": 75,
                "argument": {
                  "type": "ObjectExpression",
                  "start": 54,
                  "end": 75,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 60,
                      "end": 70,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 60,
                        "end": 61,
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "AssignmentExpression",
                        "start": 63,
                        "end": 70,
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "start": 63,
                          "end": 66,
                          "object": {
                            "type": "Identifier",
                            "start": 63,
                            "end": 64,
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 65,
                            "end": 66,
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "right": {
                          "type": "Literal",
                          "start": 69,
                          "end": 70,
                          "value": 1,
                          "raw": "1"
                        }
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ]
                }
              }
            ]
          },
          "expression": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
