__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 230,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 15,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 11,
        "decorators": [],
        "name": "Based",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 12,
        "end": 15,
        "body": []
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 40,
      "end": 143,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 46,
        "end": 53,
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 54,
        "end": 143,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 60,
            "end": 141,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 60,
              "end": 71,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 71,
              "end": 141,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 74,
                "end": 141,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 84,
                    "end": 89,
                    "expression": {
                      "type": "ThisExpression",
                      "start": 84,
                      "end": 88
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 98,
                    "end": 110,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 98,
                      "end": 109,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 98,
                        "end": 104,
                        "object": {
                          "type": "ThisExpression",
                          "start": 98,
                          "end": 102
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 103,
                          "end": 104,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 107,
                        "end": 109,
                        "value": 10,
                        "raw": "10"
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 119,
                    "end": 135,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 123,
                        "end": 134,
                        "id": {
                          "type": "Identifier",
                          "start": 123,
                          "end": 127,
                          "decorators": [],
                          "name": "that",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 130,
                          "end": 134
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
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
      "start": 169,
      "end": 230,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 175,
        "end": 183,
        "decorators": [],
        "name": "Derived2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 184,
        "end": 230,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 190,
            "end": 228,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 190,
              "end": 201,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 201,
              "end": 228,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 204,
                "end": 228,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 214,
                    "end": 222,
                    "expression": {
                      "type": "CallExpression",
                      "start": 214,
                      "end": 221,
                      "callee": {
                        "type": "Super",
                        "start": 214,
                        "end": 219
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
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
