__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 397,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 12,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 7,
        "end": 11,
        "raw": "\"./\"",
        "value": "./"
      },
      "specifiers": []
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 14,
      "end": 48,
      "id": {
        "type": "Identifier",
        "start": 21,
        "end": 27,
        "decorators": [],
        "name": "Person",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 30,
        "end": 47,
        "expression": {
          "type": "Literal",
          "start": 38,
          "end": 46,
          "raw": "\"./mod1\"",
          "value": "./mod1"
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 50,
      "end": 79,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 56,
          "end": 79,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 56,
            "end": 58,
            "decorators": [],
            "name": "m1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 61,
            "end": 79,
            "arguments": [
              {
                "type": "Literal",
                "start": 72,
                "end": 78,
                "raw": "\"Name\"",
                "value": "Name"
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 65,
              "end": 71,
              "decorators": [],
              "name": "Person",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 81,
      "end": 90,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 81,
        "end": 89,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 81,
          "end": 83,
          "decorators": [],
          "name": "m1",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 84,
          "end": 89,
          "decorators": [],
          "name": "thing",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 91,
      "end": 107,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 91,
        "end": 106,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 91,
          "end": 93,
          "decorators": [],
          "name": "m1",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 94,
          "end": 106,
          "decorators": [],
          "name": "readonlyProp",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 108,
      "end": 123,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 108,
        "end": 122,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 108,
          "end": 110,
          "decorators": [],
          "name": "m1",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 111,
          "end": 122,
          "decorators": [],
          "name": "rwAccessors",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 124,
      "end": 144,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 124,
        "end": 143,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 124,
          "end": 126,
          "decorators": [],
          "name": "m1",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 127,
          "end": 143,
          "decorators": [],
          "name": "readonlyAccessor",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 145,
      "end": 164,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 145,
        "end": 163,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 145,
          "end": 147,
          "decorators": [],
          "name": "m1",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 148,
          "end": 163,
          "decorators": [],
          "name": "setonlyAccessor",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 189,
      "end": 203,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 189,
        "end": 202,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 189,
          "end": 197,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 189,
            "end": 191,
            "decorators": [],
            "name": "m1",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 192,
            "end": 197,
            "decorators": [],
            "name": "thing",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 200,
          "end": 202,
          "raw": "10",
          "value": 10
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 204,
      "end": 224,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 204,
        "end": 223,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 204,
          "end": 218,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 204,
            "end": 206,
            "decorators": [],
            "name": "m1",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 207,
            "end": 218,
            "decorators": [],
            "name": "rwAccessors",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 221,
          "end": 223,
          "raw": "11",
          "value": 11
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 225,
      "end": 252,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 225,
        "end": 251,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 225,
          "end": 243,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 225,
            "end": 227,
            "decorators": [],
            "name": "m1",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 228,
            "end": 243,
            "decorators": [],
            "name": "setonlyAccessor",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 246,
          "end": 251,
          "raw": "\"yes\"",
          "value": "yes"
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 280,
      "end": 305,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 280,
        "end": 304,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 280,
          "end": 295,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 280,
            "end": 282,
            "decorators": [],
            "name": "m1",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 283,
            "end": 295,
            "decorators": [],
            "name": "readonlyProp",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 298,
          "end": 304,
          "raw": "\"name\"",
          "value": "name"
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 306,
      "end": 331,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 306,
        "end": 330,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 306,
          "end": 325,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 306,
            "end": 308,
            "decorators": [],
            "name": "m1",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 309,
            "end": 325,
            "decorators": [],
            "name": "readonlyAccessor",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 328,
          "end": 330,
          "raw": "12",
          "value": 12
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 332,
      "end": 348,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 332,
        "end": 347,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 332,
          "end": 340,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 332,
            "end": 334,
            "decorators": [],
            "name": "m1",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 335,
            "end": 340,
            "decorators": [],
            "name": "thing",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 343,
          "end": 347,
          "raw": "\"no\"",
          "value": "no"
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 349,
      "end": 371,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 349,
        "end": 370,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 349,
          "end": 363,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 349,
            "end": 351,
            "decorators": [],
            "name": "m1",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 352,
            "end": 363,
            "decorators": [],
            "name": "rwAccessors",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 366,
          "end": 370,
          "raw": "\"no\"",
          "value": "no"
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 372,
      "end": 395,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 372,
        "end": 394,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 372,
          "end": 390,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 372,
            "end": 374,
            "decorators": [],
            "name": "m1",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 375,
            "end": 390,
            "decorators": [],
            "name": "setonlyAccessor",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 393,
          "end": 394,
          "raw": "0",
          "value": 0
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
