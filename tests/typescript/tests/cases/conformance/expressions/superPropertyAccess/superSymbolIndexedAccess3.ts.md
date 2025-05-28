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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 34,
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
            "callee": {
              "type": "MemberExpression",
              "start": 13,
              "end": 23,
              "object": {
                "type": "Identifier",
                "start": 13,
                "end": 19,
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 20,
                "end": 23,
                "decorators": [],
                "name": "for",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 24,
                "end": 33,
                "value": "myThing",
                "raw": "'myThing'"
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 37,
      "end": 91,
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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 47,
        "end": 91,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 53,
            "end": 89,
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
            "value": {
              "type": "FunctionExpression",
              "start": 61,
              "end": 89,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
              "expression": false
            },
            "kind": "method",
            "computed": true,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 93,
      "end": 170,
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
      "typeParameters": null,
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
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 115,
        "end": 170,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 121,
            "end": 168,
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
            "value": {
              "type": "FunctionExpression",
              "start": 129,
              "end": 168,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                          "decorators": [],
                          "name": "Bar",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": true
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": true,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
