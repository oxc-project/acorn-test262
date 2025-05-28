__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 48,
  "end": 380,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 48,
      "end": 89,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 54,
        "end": 55,
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
        "start": 56,
        "end": 89,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 58,
            "end": 87,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 58,
              "end": 69,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 69,
              "end": 87,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 72,
                "end": 87,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 74,
                    "end": 85,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 74,
                      "end": 84,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 74,
                        "end": 80,
                        "object": {
                          "type": "ThisExpression",
                          "start": 74,
                          "end": 78
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 79,
                          "end": 80,
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 83,
                        "end": 84,
                        "value": 1,
                        "raw": "1"
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
    },
    {
      "type": "ExpressionStatement",
      "start": 330,
      "end": 353,
      "expression": {
        "type": "AssignmentExpression",
        "start": 330,
        "end": 352,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 330,
          "end": 341,
          "object": {
            "type": "Identifier",
            "start": 330,
            "end": 331,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 332,
            "end": 341,
            "decorators": [],
            "name": "prototype",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "ObjectExpression",
          "start": 344,
          "end": 352,
          "properties": [
            {
              "type": "Property",
              "start": 346,
              "end": 350,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 346,
                "end": 347,
                "decorators": [],
                "name": "q",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Literal",
                "start": 349,
                "end": 350,
                "value": 2,
                "raw": "2"
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 355,
      "end": 372,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 361,
          "end": 372,
          "id": {
            "type": "Identifier",
            "start": 361,
            "end": 362,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 365,
            "end": 372,
            "callee": {
              "type": "Identifier",
              "start": 369,
              "end": 370,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 373,
      "end": 376,
      "expression": {
        "type": "MemberExpression",
        "start": 373,
        "end": 376,
        "object": {
          "type": "Identifier",
          "start": 373,
          "end": 374,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 375,
          "end": 376,
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 377,
      "end": 380,
      "expression": {
        "type": "MemberExpression",
        "start": 377,
        "end": 380,
        "object": {
          "type": "Identifier",
          "start": 377,
          "end": 378,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 379,
          "end": 380,
          "decorators": [],
          "name": "q",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
