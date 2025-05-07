__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 221,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 180,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 23,
        "end": 180,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 29,
            "end": 124,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 29,
              "end": 33,
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 33,
              "end": 124,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 36,
                "end": 124,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 46,
                    "end": 118,
                    "argument": {
                      "type": "ObjectExpression",
                      "start": 53,
                      "end": 118,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 99,
                          "end": 108,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 99,
                            "end": 104,
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 106,
                            "end": 108,
                            "raw": "\"\"",
                            "value": "",
                            "regex": null,
                            "bigint": null
                          }
                        }
                      ]
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
            "start": 130,
            "end": 178,
            "accessibility": null,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "start": 131,
              "end": 146,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 131,
                "end": 137,
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 138,
                "end": 146,
                "decorators": [],
                "name": "iterator",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 147,
              "end": 178,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 150,
                "end": 178,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 160,
                    "end": 172,
                    "argument": {
                      "type": "ThisExpression",
                      "start": 167,
                      "end": 171
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
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 22,
        "decorators": [],
        "name": "MyStringIterator",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ForOfStatement",
      "start": 182,
      "end": 221,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 218,
        "end": 221,
        "body": []
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 187,
        "end": 192,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 191,
            "end": 192,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 191,
              "end": 192,
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "right": {
        "type": "NewExpression",
        "start": 196,
        "end": 216,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 200,
          "end": 216,
          "decorators": [],
          "name": "MyStringIterator",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
