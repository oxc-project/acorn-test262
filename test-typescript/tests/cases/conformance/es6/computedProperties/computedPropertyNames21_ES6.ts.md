__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 70,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 70,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 70,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 45,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 17,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 17,
              "end": 45,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 20,
                "end": 45,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 30,
                    "end": 39,
                    "argument": {
                      "type": "Literal",
                      "start": 37,
                      "end": 38,
                      "raw": "0",
                      "value": 0
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 50,
            "end": 68,
            "accessibility": null,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "CallExpression",
              "start": 51,
              "end": 61,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 51,
                "end": 59,
                "computed": false,
                "object": {
                  "type": "ThisExpression",
                  "start": 51,
                  "end": 55
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 56,
                  "end": 59,
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 62,
              "end": 68,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 65,
                "end": 68,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
