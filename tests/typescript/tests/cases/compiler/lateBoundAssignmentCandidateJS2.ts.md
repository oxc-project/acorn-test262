__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 173,
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
      "end": 173,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 29,
        "end": 173,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 35,
          "end": 39,
          "decorators": [],
          "name": "foo1",
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
          "end": 173,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 46,
              "end": 94,
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
                "end": 94,
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
                  "end": 94,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 70,
                      "end": 88,
                      "expression": {
                        "type": "AssignmentExpression",
                        "start": 70,
                        "end": 88,
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
                          "end": 88,
                          "value": "bar",
                          "raw": "'bar'"
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
              "start": 156,
              "end": 171,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 157,
                "end": 161,
                "decorators": [],
                "name": "prop",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": null,
              "value": {
                "type": "Literal",
                "start": 165,
                "end": 170,
                "value": "baz",
                "raw": "'baz'"
              },
              "computed": true,
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
