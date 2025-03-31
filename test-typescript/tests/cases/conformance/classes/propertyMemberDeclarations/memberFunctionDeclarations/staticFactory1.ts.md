__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 188,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 93,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 10,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 93,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 17,
            "end": 36,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 17,
              "end": 20,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 20,
              "end": 36,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 23,
                "end": 36,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 25,
                    "end": 34,
                    "argument": {
                      "type": "Literal",
                      "start": 32,
                      "end": 33,
                      "value": 1,
                      "raw": "1"
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
          },
          {
            "type": "MethodDefinition",
            "start": 41,
            "end": 91,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 48,
              "end": 54,
              "name": "create",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 54,
              "end": 91,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 57,
                "end": 91,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 67,
                    "end": 85,
                    "argument": {
                      "type": "NewExpression",
                      "start": 74,
                      "end": 84,
                      "callee": {
                        "type": "ThisExpression",
                        "start": 78,
                        "end": 82
                      },
                      "arguments": [],
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
    },
    {
      "type": "ClassDeclaration",
      "start": 95,
      "end": 149,
      "id": {
        "type": "Identifier",
        "start": 101,
        "end": 108,
        "name": "Derived",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 117,
        "end": 121,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 122,
        "end": 149,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 128,
            "end": 147,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 128,
              "end": 131,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 131,
              "end": 147,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 134,
                "end": 147,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 136,
                    "end": 145,
                    "argument": {
                      "type": "Literal",
                      "start": 143,
                      "end": 144,
                      "value": 2,
                      "raw": "2"
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
      "type": "VariableDeclaration",
      "start": 150,
      "end": 175,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 154,
          "end": 174,
          "id": {
            "type": "Identifier",
            "start": 154,
            "end": 155,
            "name": "d",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 158,
            "end": 174,
            "callee": {
              "type": "MemberExpression",
              "start": 158,
              "end": 172,
              "object": {
                "type": "Identifier",
                "start": 158,
                "end": 165,
                "name": "Derived",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 166,
                "end": 172,
                "name": "create",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [],
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
      "type": "ExpressionStatement",
      "start": 178,
      "end": 186,
      "expression": {
        "type": "CallExpression",
        "start": 178,
        "end": 185,
        "callee": {
          "type": "MemberExpression",
          "start": 178,
          "end": 183,
          "object": {
            "type": "Identifier",
            "start": 178,
            "end": 179,
            "name": "d",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 180,
            "end": 183,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
