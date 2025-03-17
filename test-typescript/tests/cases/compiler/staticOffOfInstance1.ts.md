__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 77,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 77,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 77,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 15,
            "end": 50,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 22,
              "end": 26,
              "decorators": [],
              "name": "Blah",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 26,
              "end": 50,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 29,
                "end": 50,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 35,
                    "end": 46,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 35,
                      "end": 45,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 35,
                        "end": 43,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 35,
                          "end": 39
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 40,
                          "end": 43,
                          "decorators": [],
                          "name": "Foo",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "typeArguments": null
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
            "start": 53,
            "end": 75,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 67,
              "end": 70,
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 70,
              "end": 75,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 73,
                "end": 75,
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
        "end": 10,
        "decorators": [],
        "name": "List",
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
