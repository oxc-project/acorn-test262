__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 357,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 10,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 133,
  "end": 309,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 133,
      "end": 181,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 156,
        "end": 181,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 162,
            "end": 179,
            "argument": {
              "type": "ObjectExpression",
              "start": 169,
              "end": 178,
              "properties": [
                {
                  "type": "Property",
                  "start": 170,
                  "end": 177,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 170,
                    "end": 171,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "BinaryExpression",
                    "start": 173,
                    "end": 177,
                    "operator": "+",
                    "left": {
                      "type": "Literal",
                      "start": 173,
                      "end": 175,
                      "raw": "\"\"",
                      "value": "",
                      "regex": null,
                      "bigint": null
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 176,
                      "end": 177,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 142,
        "end": 152,
        "decorators": [],
        "name": "doTheThing",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 153,
          "end": 154,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 182,
      "end": 218,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 202,
        "end": 218,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 208,
            "end": 216,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 208,
              "end": 209,
              "decorators": [],
              "name": "z",
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
              "start": 212,
              "end": 216,
              "raw": "\"ok\"",
              "value": "ok",
              "regex": null,
              "bigint": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 188,
        "end": 201,
        "decorators": [],
        "name": "ExportedThing",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 219,
      "end": 275,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 219,
        "end": 274,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 219,
          "end": 233,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 219,
            "end": 225,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 226,
            "end": 233,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "ObjectExpression",
          "start": 236,
          "end": 274,
          "properties": [
            {
              "type": "Property",
              "start": 242,
              "end": 252,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 242,
                "end": 252,
                "decorators": [],
                "name": "doTheThing",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "Identifier",
                "start": 242,
                "end": 252,
                "decorators": [],
                "name": "doTheThing",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "Property",
              "start": 258,
              "end": 271,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 258,
                "end": 271,
                "decorators": [],
                "name": "ExportedThing",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "Identifier",
                "start": 258,
                "end": 271,
                "decorators": [],
                "name": "ExportedThing",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 276,
      "end": 309,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 293,
        "end": 309,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 299,
            "end": 307,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 299,
              "end": 300,
              "decorators": [],
              "name": "y",
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
              "start": 303,
              "end": 307,
              "raw": "\"ok\"",
              "value": "ok",
              "regex": null,
              "bigint": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 282,
        "end": 292,
        "decorators": [],
        "name": "LocalThing",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
