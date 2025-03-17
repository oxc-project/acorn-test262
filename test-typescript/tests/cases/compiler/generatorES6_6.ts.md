__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 61,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 61,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 61,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 12,
            "end": 59,
            "static": false,
            "computed": true,
            "key": {
              "type": "MemberExpression",
              "start": 14,
              "end": 29,
              "object": {
                "type": "Identifier",
                "start": 14,
                "end": 20,
                "name": "Symbol",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 21,
                "end": 29,
                "name": "iterator",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 30,
              "end": 59,
              "id": null,
              "expression": false,
              "generator": true,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 33,
                "end": 59,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 39,
                    "end": 55,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 43,
                        "end": 54,
                        "id": {
                          "type": "Identifier",
                          "start": 43,
                          "end": 44,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "YieldExpression",
                          "start": 47,
                          "end": 54,
                          "delegate": false,
                          "argument": {
                            "type": "Literal",
                            "start": 53,
                            "end": 54,
                            "value": 1,
                            "raw": "1"
                          }
                        },
                        "definite": false
                      }
                    ],
                    "kind": "let",
                    "declare": false
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
            "accessibility": null
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
