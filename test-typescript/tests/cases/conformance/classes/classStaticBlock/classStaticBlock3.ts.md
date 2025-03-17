__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 201,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 12,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 11,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 7,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 10,
            "end": 11,
            "value": 1,
            "raw": "1"
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 14,
      "end": 200,
      "id": {
        "type": "Identifier",
        "start": 20,
        "end": 21,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 22,
        "end": 200,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 28,
            "end": 42,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 35,
              "end": 37,
              "name": "f1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 40,
              "end": 41,
              "value": 1,
              "raw": "1"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "StaticBlock",
            "start": 48,
            "end": 100,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 65,
                "end": 94,
                "expression": {
                  "type": "CallExpression",
                  "start": 65,
                  "end": 94,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 65,
                    "end": 76,
                    "object": {
                      "type": "Identifier",
                      "start": 65,
                      "end": 72,
                      "name": "console",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 73,
                      "end": 76,
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
                      "type": "MemberExpression",
                      "start": 77,
                      "end": 81,
                      "object": {
                        "type": "Identifier",
                        "start": 77,
                        "end": 78,
                        "name": "C",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 79,
                        "end": 81,
                        "name": "f1",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    {
                      "type": "MemberExpression",
                      "start": 83,
                      "end": 87,
                      "object": {
                        "type": "Identifier",
                        "start": 83,
                        "end": 84,
                        "name": "C",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 85,
                        "end": 87,
                        "name": "f2",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    {
                      "type": "MemberExpression",
                      "start": 89,
                      "end": 93,
                      "object": {
                        "type": "Identifier",
                        "start": 89,
                        "end": 90,
                        "name": "C",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 91,
                        "end": 93,
                        "name": "f3",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
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
          {
            "type": "PropertyDefinition",
            "start": 106,
            "end": 120,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 113,
              "end": 115,
              "name": "f2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 118,
              "end": 119,
              "value": 2,
              "raw": "2"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "StaticBlock",
            "start": 126,
            "end": 178,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 143,
                "end": 172,
                "expression": {
                  "type": "CallExpression",
                  "start": 143,
                  "end": 172,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 143,
                    "end": 154,
                    "object": {
                      "type": "Identifier",
                      "start": 143,
                      "end": 150,
                      "name": "console",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 151,
                      "end": 154,
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
                      "type": "MemberExpression",
                      "start": 155,
                      "end": 159,
                      "object": {
                        "type": "Identifier",
                        "start": 155,
                        "end": 156,
                        "name": "C",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 157,
                        "end": 159,
                        "name": "f1",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    {
                      "type": "MemberExpression",
                      "start": 161,
                      "end": 165,
                      "object": {
                        "type": "Identifier",
                        "start": 161,
                        "end": 162,
                        "name": "C",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 163,
                        "end": 165,
                        "name": "f2",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    {
                      "type": "MemberExpression",
                      "start": 167,
                      "end": 171,
                      "object": {
                        "type": "Identifier",
                        "start": 167,
                        "end": 168,
                        "name": "C",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 169,
                        "end": 171,
                        "name": "f3",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
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
          {
            "type": "PropertyDefinition",
            "start": 184,
            "end": 198,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 191,
              "end": 193,
              "name": "f3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 196,
              "end": 197,
              "value": 3,
              "raw": "3"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
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
