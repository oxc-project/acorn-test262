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
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 19,
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
            "value": "prop",
            "raw": "'prop'"
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 22,
      "end": 169,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 29,
        "end": 169,
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
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 40,
          "end": 169,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 46,
              "end": 92,
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
              "value": {
                "type": "FunctionExpression",
                "start": 57,
                "end": 92,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 60,
                  "end": 92,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 70,
                      "end": 86,
                      "expression": {
                        "type": "AssignmentExpression",
                        "start": 70,
                        "end": 85,
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "start": 70,
                          "end": 80,
                          "object": {
                            "type": "ThisExpression",
                            "start": 70,
                            "end": 74
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 75,
                            "end": 79,
                            "decorators": [],
                            "name": "prop",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": true
                        },
                        "right": {
                          "type": "Literal",
                          "start": 83,
                          "end": 85,
                          "value": 12,
                          "raw": "12"
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
            },
            {
              "type": "PropertyDefinition",
              "start": 154,
              "end": 167,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 154,
                "end": 158,
                "decorators": [],
                "name": "prop",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": null,
              "value": {
                "type": "Literal",
                "start": 161,
                "end": 166,
                "value": "baz",
                "raw": "'baz'"
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null
            }
          ]
        },
        "abstract": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
