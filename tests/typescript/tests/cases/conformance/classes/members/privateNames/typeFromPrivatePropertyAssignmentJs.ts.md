__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 0,
  "body": [],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 207,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 207,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 207,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 63,
            "end": 66,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 63,
              "end": 65,
              "name": "a"
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 120,
            "end": 123,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 120,
              "end": 122,
              "name": "b"
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 128,
            "end": 205,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 128,
              "end": 129,
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 129,
              "end": 205,
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
                "end": 205,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 142,
                    "end": 166,
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 148,
                        "end": 165,
                        "id": {
                          "type": "Identifier",
                          "start": 148,
                          "end": 149,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "LogicalExpression",
                          "start": 152,
                          "end": 165,
                          "left": {
                            "type": "MemberExpression",
                            "start": 152,
                            "end": 159,
                            "object": {
                              "type": "ThisExpression",
                              "start": 152,
                              "end": 156
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 157,
                              "end": 159,
                              "name": "a"
                            },
                            "optional": false,
                            "computed": false
                          },
                          "operator": "||",
                          "right": {
                            "type": "ObjectExpression",
                            "start": 163,
                            "end": 165,
                            "properties": []
                          }
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 175,
                    "end": 199,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 175,
                      "end": 198,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 175,
                        "end": 182,
                        "object": {
                          "type": "ThisExpression",
                          "start": 175,
                          "end": 179
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 180,
                          "end": 182,
                          "name": "b"
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "start": 185,
                        "end": 198,
                        "left": {
                          "type": "MemberExpression",
                          "start": 185,
                          "end": 192,
                          "object": {
                            "type": "ThisExpression",
                            "start": 185,
                            "end": 189
                          },
                          "property": {
                            "type": "PrivateIdentifier",
                            "start": 190,
                            "end": 192,
                            "name": "b"
                          },
                          "optional": false,
                          "computed": false
                        },
                        "operator": "||",
                        "right": {
                          "type": "ObjectExpression",
                          "start": 196,
                          "end": 198,
                          "properties": []
                        }
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
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
  "sourceType": "module",
  "hashbang": null
}
```
