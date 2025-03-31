__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 214,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 39,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 39,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 39,
            "name": "console",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 11,
              "end": 39,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 13,
                "end": 39,
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "start": 19,
                    "end": 37,
                    "key": {
                      "type": "Identifier",
                      "start": 19,
                      "end": 22,
                      "name": "log",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 23,
                        "end": 35,
                        "name": "message",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 30,
                          "end": 35,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 32,
                            "end": 35
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": null,
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 40,
      "end": 56,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 44,
          "end": 55,
          "id": {
            "type": "Identifier",
            "start": 44,
            "end": 50,
            "name": "_super",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 53,
            "end": 55,
            "value": 10,
            "raw": "10"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 69,
      "end": 83,
      "id": {
        "type": "Identifier",
        "start": 75,
        "end": 79,
        "name": "base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 80,
        "end": 83,
        "body": []
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
      "start": 84,
      "end": 214,
      "id": {
        "type": "Identifier",
        "start": 90,
        "end": 93,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 102,
        "end": 106,
        "name": "base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 107,
        "end": 214,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 113,
            "end": 212,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 113,
              "end": 114,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 114,
              "end": 212,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 117,
                "end": 212,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 127,
                    "end": 147,
                    "expression": {
                      "type": "CallExpression",
                      "start": 127,
                      "end": 146,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 127,
                        "end": 138,
                        "object": {
                          "type": "Identifier",
                          "start": 127,
                          "end": 134,
                          "name": "console",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 135,
                          "end": 138,
                          "name": "log",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 139,
                          "end": 145,
                          "name": "_super",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
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
