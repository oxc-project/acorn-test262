__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 349,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 18,
      "expression": {
        "type": "AssignmentExpression",
        "start": 0,
        "end": 17,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 0,
          "end": 13,
          "object": {
            "type": "Identifier",
            "start": 0,
            "end": 7,
            "name": "exports",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "PrivateIdentifier",
            "start": 8,
            "end": 13,
            "name": "nope"
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 16,
          "end": 17,
          "value": 1,
          "raw": "1"
        }
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 59,
      "end": 75,
      "id": {
        "type": "Identifier",
        "start": 68,
        "end": 69,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 72,
        "end": 75,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 76,
      "end": 96,
      "expression": {
        "type": "AssignmentExpression",
        "start": 76,
        "end": 95,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 76,
          "end": 91,
          "object": {
            "type": "MemberExpression",
            "start": 76,
            "end": 87,
            "object": {
              "type": "Identifier",
              "start": 76,
              "end": 77,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 78,
              "end": 87,
              "name": "prototype",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "property": {
            "type": "PrivateIdentifier",
            "start": 88,
            "end": 91,
            "name": "no"
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 94,
          "end": 95,
          "value": 2,
          "raw": "2"
        }
      },
      "directive": null
    },
    {
      "type": "ClassDeclaration",
      "start": 136,
      "end": 146,
      "id": {
        "type": "Identifier",
        "start": 142,
        "end": 143,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 144,
        "end": 146,
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
      "type": "ExpressionStatement",
      "start": 147,
      "end": 158,
      "expression": {
        "type": "AssignmentExpression",
        "start": 147,
        "end": 157,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 147,
          "end": 153,
          "object": {
            "type": "Identifier",
            "start": 147,
            "end": 148,
            "name": "B",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "PrivateIdentifier",
            "start": 149,
            "end": 153,
            "name": "foo"
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 156,
          "end": 157,
          "value": 3,
          "raw": "3"
        }
      },
      "directive": null
    },
    {
      "type": "ClassDeclaration",
      "start": 207,
      "end": 348,
      "id": {
        "type": "Identifier",
        "start": 213,
        "end": 214,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 215,
        "end": 348,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 221,
            "end": 230,
            "static": false,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 221,
              "end": 225,
              "name": "bar"
            },
            "value": {
              "type": "Literal",
              "start": 228,
              "end": 229,
              "value": 6,
              "raw": "6"
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
            "type": "MethodDefinition",
            "start": 235,
            "end": 346,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 235,
              "end": 246,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 247,
              "end": 346,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 250,
                "end": 346,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 260,
                    "end": 277,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 260,
                      "end": 276,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 260,
                        "end": 272,
                        "object": {
                          "type": "Identifier",
                          "start": 260,
                          "end": 267,
                          "name": "exports",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 268,
                          "end": 272,
                          "name": "bar"
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 275,
                        "end": 276,
                        "value": 6,
                        "raw": "6"
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 298,
                    "end": 312,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 298,
                      "end": 311,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 298,
                        "end": 307,
                        "object": {
                          "type": "ThisExpression",
                          "start": 298,
                          "end": 302
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 303,
                          "end": 307,
                          "name": "foo"
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 310,
                        "end": 311,
                        "value": 3,
                        "raw": "3"
                      }
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
