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
      "declaration": null,
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
      "id": {
        "type": "Identifier",
        "start": 142,
        "end": 152,
        "decorators": [],
        "name": "doTheThing",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 170,
                    "end": 171,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "BinaryExpression",
                    "start": 173,
                    "end": 177,
                    "left": {
                      "type": "Literal",
                      "start": 173,
                      "end": 175,
                      "value": "",
                      "raw": "\"\""
                    },
                    "operator": "+",
                    "right": {
                      "type": "Identifier",
                      "start": 176,
                      "end": 177,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                }
              ]
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ClassDeclaration",
      "start": 182,
      "end": 218,
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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 202,
        "end": 218,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 208,
            "end": 216,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 208,
              "end": 209,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 212,
              "end": 216,
              "value": "ok",
              "raw": "\"ok\""
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
    {
      "type": "ExpressionStatement",
      "start": 219,
      "end": 275,
      "expression": {
        "type": "AssignmentExpression",
        "start": 219,
        "end": 274,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 219,
          "end": 233,
          "object": {
            "type": "Identifier",
            "start": 219,
            "end": 225,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 226,
            "end": 233,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
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
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 242,
                "end": 252,
                "decorators": [],
                "name": "doTheThing",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Identifier",
                "start": 242,
                "end": 252,
                "decorators": [],
                "name": "doTheThing",
                "optional": false,
                "typeAnnotation": null
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false
            },
            {
              "type": "Property",
              "start": 258,
              "end": 271,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 258,
                "end": 271,
                "decorators": [],
                "name": "ExportedThing",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Identifier",
                "start": 258,
                "end": 271,
                "decorators": [],
                "name": "ExportedThing",
                "optional": false,
                "typeAnnotation": null
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ClassDeclaration",
      "start": 276,
      "end": 309,
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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 293,
        "end": 309,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 299,
            "end": 307,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 299,
              "end": 300,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 303,
              "end": 307,
              "value": "ok",
              "raw": "\"ok\""
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
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
