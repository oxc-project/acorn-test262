__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 170,
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
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 10,
            "name": "symbol",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 13,
            "end": 34,
            "callee": {
              "type": "MemberExpression",
              "start": 13,
              "end": 23,
              "object": {
                "type": "Identifier",
                "start": 13,
                "end": 19,
                "name": "Symbol",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 20,
                "end": 23,
                "name": "for",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 24,
                "end": 33,
                "value": "myThing",
                "raw": "'myThing'"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 37,
      "end": 91,
      "id": {
        "type": "Identifier",
        "start": 43,
        "end": 46,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 47,
        "end": 91,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 53,
            "end": 89,
            "static": false,
            "computed": true,
            "key": {
              "type": "Identifier",
              "start": 54,
              "end": 60,
              "name": "symbol",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 61,
              "end": 89,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "value": 0,
                      "raw": "0"
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
    },
    {
      "type": "ClassDeclaration",
      "start": 93,
      "end": 170,
      "id": {
        "type": "Identifier",
        "start": 99,
        "end": 102,
        "name": "Bar",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 111,
        "end": 114,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 115,
        "end": 170,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 121,
            "end": 168,
            "static": false,
            "computed": true,
            "key": {
              "type": "Identifier",
              "start": 122,
              "end": 128,
              "name": "symbol",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 129,
              "end": 168,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 132,
                "end": 168,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 142,
                    "end": 162,
                    "argument": {
                      "type": "CallExpression",
                      "start": 149,
                      "end": 161,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 149,
                        "end": 159,
                        "object": {
                          "type": "Super",
                          "start": 149,
                          "end": 154
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 155,
                          "end": 158,
                          "name": "Bar",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": true,
                        "optional": false
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
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
