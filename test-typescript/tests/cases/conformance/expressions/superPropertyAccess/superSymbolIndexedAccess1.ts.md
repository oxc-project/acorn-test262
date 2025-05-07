__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 173,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 35,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 34,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 10,
            "decorators": [],
            "name": "symbol",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 13,
            "end": 34,
            "arguments": [
              {
                "type": "Literal",
                "start": 24,
                "end": 33,
                "raw": "'myThing'",
                "value": "myThing",
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 13,
              "end": 23,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 13,
                "end": 19,
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 20,
                "end": 23,
                "decorators": [],
                "name": "for",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ClassDeclaration",
      "start": 37,
      "end": 91,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 47,
        "end": 91,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 53,
            "end": 89,
            "accessibility": null,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 54,
              "end": 60,
              "decorators": [],
              "name": "symbol",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 61,
              "end": 89,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 64,
                "end": 89,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 74,
                    "end": 83,
                    "argument": {
                      "type": "Literal",
                      "start": 81,
                      "end": 82,
                      "raw": "0",
                      "value": 0,
                      "regex": null,
                      "bigint": null
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
        "start": 43,
        "end": 46,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 93,
      "end": 173,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 115,
        "end": 173,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 121,
            "end": 171,
            "accessibility": null,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 122,
              "end": 128,
              "decorators": [],
              "name": "symbol",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 129,
              "end": 171,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 132,
                "end": 171,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 142,
                    "end": 165,
                    "argument": {
                      "type": "CallExpression",
                      "start": 149,
                      "end": 164,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 149,
                        "end": 162,
                        "computed": true,
                        "object": {
                          "type": "Super",
                          "start": 149,
                          "end": 154
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 155,
                          "end": 161,
                          "decorators": [],
                          "name": "symbol",
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
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 99,
        "end": 102,
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 111,
        "end": 114,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
