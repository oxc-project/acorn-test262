__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 147,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 73,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 8,
        "name": "C1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 9,
        "end": 73,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 15,
            "end": 71,
            "static": false,
            "computed": true,
            "key": {
              "type": "MemberExpression",
              "start": 16,
              "end": 34,
              "object": {
                "type": "Identifier",
                "start": 16,
                "end": 22,
                "name": "Symbol",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 23,
                "end": 34,
                "name": "toStringTag",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 35,
              "end": 71,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 38,
                "end": 71,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 48,
                    "end": 65,
                    "argument": {
                      "type": "ObjectExpression",
                      "start": 55,
                      "end": 64,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 57,
                          "end": 62,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 57,
                            "end": 58,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 60,
                            "end": 62,
                            "value": "",
                            "raw": "\"\""
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ]
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
      "start": 75,
      "end": 98,
      "id": {
        "type": "Identifier",
        "start": 81,
        "end": 83,
        "name": "C2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 92,
        "end": 94,
        "name": "C1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 95,
        "end": 98,
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
      "type": "VariableDeclaration",
      "start": 100,
      "end": 110,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 104,
          "end": 109,
          "id": {
            "type": "Identifier",
            "start": 104,
            "end": 109,
            "name": "c",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 105,
              "end": 109,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 107,
                "end": 109,
                "typeName": {
                  "type": "Identifier",
                  "start": 107,
                  "end": 109,
                  "name": "C2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
      "start": 111,
      "end": 147,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 115,
          "end": 146,
          "id": {
            "type": "Identifier",
            "start": 115,
            "end": 118,
            "name": "obj",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 121,
            "end": 146,
            "object": {
              "type": "CallExpression",
              "start": 121,
              "end": 144,
              "callee": {
                "type": "MemberExpression",
                "start": 121,
                "end": 142,
                "object": {
                  "type": "Identifier",
                  "start": 121,
                  "end": 122,
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "MemberExpression",
                  "start": 123,
                  "end": 141,
                  "object": {
                    "type": "Identifier",
                    "start": 123,
                    "end": 129,
                    "name": "Symbol",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 130,
                    "end": 141,
                    "name": "toStringTag",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "computed": true,
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "property": {
              "type": "Identifier",
              "start": 145,
              "end": 146,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
