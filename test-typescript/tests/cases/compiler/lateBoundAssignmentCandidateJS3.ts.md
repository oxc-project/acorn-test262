__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 169,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 20,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 19,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 10,
            "decorators": [],
            "name": "prop",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 13,
            "end": 19,
            "raw": "'prop'",
            "value": "prop"
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 22,
      "end": 169,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 29,
        "end": 169,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 40,
          "end": 169,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 46,
              "end": 92,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 46,
                "end": 57,
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "constructor",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 57,
                "end": 92,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 60,
                  "end": 92,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 70,
                      "end": 86,
                      "directive": null,
                      "expression": {
                        "type": "AssignmentExpression",
                        "start": 70,
                        "end": 85,
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "start": 70,
                          "end": 80,
                          "computed": true,
                          "object": {
                            "type": "ThisExpression",
                            "start": 70,
                            "end": 74
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 75,
                            "end": 79,
                            "decorators": [],
                            "name": "prop",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "start": 83,
                          "end": 85,
                          "raw": "12",
                          "value": 12
                        }
                      }
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            },
            {
              "type": "PropertyDefinition",
              "start": 154,
              "end": 167,
              "accessibility": null,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 154,
                "end": 158,
                "decorators": [],
                "name": "prop",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": null,
              "value": {
                "type": "Literal",
                "start": 161,
                "end": 166,
                "raw": "'baz'",
                "value": "baz"
              }
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 35,
          "end": 39,
          "decorators": [],
          "name": "foo2",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
