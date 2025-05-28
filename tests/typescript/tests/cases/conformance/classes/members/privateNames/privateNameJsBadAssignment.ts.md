__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 310,
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
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "PrivateIdentifier",
            "start": 8,
            "end": 13,
            "name": "nope"
          },
          "optional": false,
          "computed": false
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
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 72,
        "end": 75,
        "body": []
      },
      "expression": false
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
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 78,
              "end": 87,
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "PrivateIdentifier",
            "start": 88,
            "end": 91,
            "name": "no"
          },
          "optional": false,
          "computed": false
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
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 142,
        "end": 143,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 144,
        "end": 146,
        "body": []
      },
      "abstract": false,
      "declare": false
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
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "PrivateIdentifier",
            "start": 149,
            "end": 153,
            "name": "foo"
          },
          "optional": false,
          "computed": false
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
      "end": 310,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 213,
        "end": 214,
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
        "start": 215,
        "end": 310,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 221,
            "end": 230,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 221,
              "end": 225,
              "name": "bar"
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 228,
              "end": 229,
              "value": 6,
              "raw": "6"
            },
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
            "start": 235,
            "end": 308,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 235,
              "end": 246,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 247,
              "end": 308,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 250,
                "end": 308,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 260,
                    "end": 274,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 260,
                      "end": 273,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 260,
                        "end": 269,
                        "object": {
                          "type": "ThisExpression",
                          "start": 260,
                          "end": 264
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 265,
                          "end": 269,
                          "name": "foo"
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 272,
                        "end": 273,
                        "value": 3,
                        "raw": "3"
                      }
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
