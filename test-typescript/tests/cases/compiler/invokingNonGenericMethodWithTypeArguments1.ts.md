__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 68,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 67,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 67,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 16,
            "end": 65,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 16,
              "end": 27,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 27,
              "end": 65,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 30,
                "end": 65,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 40,
                    "end": 59,
                    "expression": {
                      "type": "CallExpression",
                      "start": 40,
                      "end": 58,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 40,
                        "end": 48,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 40,
                          "end": 44
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 45,
                          "end": 48,
                          "decorators": [],
                          "name": "foo",
                          "optional": false
                        }
                      },
                      "optional": false,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 48,
                        "end": 56,
                        "params": [
                          {
                            "type": "TSStringKeyword",
                            "start": 49,
                            "end": 55
                          }
                        ]
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
