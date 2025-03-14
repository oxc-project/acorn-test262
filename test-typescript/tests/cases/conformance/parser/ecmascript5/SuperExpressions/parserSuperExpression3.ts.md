parserSuperExpression3.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 45,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 45,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 45,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 12,
            "end": 43,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 12,
              "end": 13,
              "decorators": [],
              "name": "M",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 13,
              "end": 43,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 16,
                "end": 43,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 22,
                    "end": 39,
                    "expression": {
                      "type": "CallExpression",
                      "start": 22,
                      "end": 38,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 36,
                          "end": 37,
                          "raw": "0",
                          "value": 0
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 22,
                        "end": 32,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 22,
                          "end": 26
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 27,
                          "end": 32,
                          "decorators": [],
                          "name": "super",
                          "optional": false
                        }
                      },
                      "optional": false,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 32,
                        "end": 35,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 33,
                            "end": 34,
                            "typeName": {
                              "type": "Identifier",
                              "start": 33,
                              "end": 34,
                              "decorators": [],
                              "name": "T",
                              "optional": false
                            }
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
        "end": 7,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script"
}
```
