__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 176,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 22,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 21,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 7,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 10,
            "end": 21,
            "callee": {
              "type": "Identifier",
              "start": 10,
              "end": 16,
              "name": "Symbol",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 17,
                "end": 20,
                "value": "x",
                "raw": "\"x\""
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 23,
      "end": 45,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 29,
          "end": 44,
          "id": {
            "type": "Identifier",
            "start": 29,
            "end": 30,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 33,
            "end": 44,
            "callee": {
              "type": "Identifier",
              "start": 33,
              "end": 39,
              "name": "Symbol",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 40,
                "end": 43,
                "value": "y",
                "raw": "\"y\""
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 46,
      "end": 175,
      "id": {
        "type": "Identifier",
        "start": 52,
        "end": 53,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 54,
        "end": 175,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 60,
            "end": 80,
            "static": false,
            "computed": true,
            "key": {
              "type": "Identifier",
              "start": 69,
              "end": 70,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 71,
              "end": 79,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 73,
                "end": 79
              }
            },
            "accessibility": "private"
          },
          {
            "type": "PropertyDefinition",
            "start": 85,
            "end": 105,
            "static": false,
            "computed": true,
            "key": {
              "type": "Identifier",
              "start": 94,
              "end": 95,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 96,
              "end": 104,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 98,
                "end": 104
              }
            },
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 110,
            "end": 173,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 110,
              "end": 111,
              "name": "m",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 111,
              "end": 173,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 114,
                "end": 173,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 124,
                    "end": 136,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 124,
                      "end": 135,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 124,
                        "end": 131,
                        "object": {
                          "type": "ThisExpression",
                          "start": 124,
                          "end": 128
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 129,
                          "end": 130,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": true,
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 134,
                        "end": 135,
                        "value": 0,
                        "raw": "0"
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 159,
                    "end": 167,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 159,
                      "end": 166,
                      "object": {
                        "type": "ThisExpression",
                        "start": 159,
                        "end": 163
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 164,
                        "end": 165,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": true,
                      "optional": false
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
